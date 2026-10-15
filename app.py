
from flask import Flask, jsonify, request
from database import init_db, get_connection

app = Flask(__name__)
init_db()


@app.route("/")
def home():
    return jsonify({
        "project": "SkillBridge",
        "message": "Bridging Skills. Building Partnerships.",
        "status": "running"
    })


@app.route("/api/health")
def health():
    return jsonify({"status": "healthy"})


# VIEW PROJECTS
@app.route("/api/projects", methods=["GET"])
def get_projects():
    con = get_connection()
    rows = con.execute("SELECT * FROM projects").fetchall()
    con.close()
    return jsonify([dict(row) for row in rows])


# CREATE PROJECT
@app.route("/api/projects", methods=["POST"])
def create_project():
    data = request.get_json(silent=True) or {}
    title = data.get("title", "").strip()
    description = data.get("description", "").strip()
    skills = data.get("skills_needed", "").strip()

    if not title or not description or not skills:
        return jsonify({"error": "Title, description and skills are required"}), 400

    con = get_connection()
    cur = con.execute(
        "INSERT INTO projects (title, description, skills_needed) VALUES (?, ?, ?)",
        (title, description, skills)
    )
    con.commit()
    project_id = cur.lastrowid
    con.close()

    return jsonify({"message": "Project created", "id": project_id}), 201


# VIEW PARTNERSHIP REQUESTS
@app.route("/api/requests", methods=["GET"])
def get_requests():
    con = get_connection()
    rows = con.execute(
        "SELECT * FROM partnership_requests ORDER BY id DESC"
    ).fetchall()
    con.close()
    return jsonify([dict(row) for row in rows])


# SEND PARTNERSHIP REQUEST
@app.route("/api/requests", methods=["POST"])
def create_request():
    data = request.get_json(silent=True) or {}
    sender = data.get("sender_name", "").strip()
    message = data.get("message", "").strip()
    project_id = data.get("project_id")

    if not sender or not message:
        return jsonify({"error": "Sender name and message are required"}), 400

    if project_id is not None:
        try:
            project_id = int(project_id)
        except (ValueError, TypeError):
            return jsonify({"error": "project_id must be a number"}), 400

        con = get_connection()
        project = con.execute(
            "SELECT id FROM projects WHERE id = ?", (project_id,)
        ).fetchone()
        con.close()

        if project is None:
            return jsonify({"error": "Project not found"}), 404

    con = get_connection()
    cur = con.execute(
        """INSERT INTO partnership_requests
           (sender_name, project_id, message)
           VALUES (?, ?, ?)""",
        (sender, project_id, message)
    )
    con.commit()
    request_id = cur.lastrowid
    con.close()

    return jsonify({
        "message": "Partnership request created",
        "id": request_id,
        "status": "Pending"
    }), 201


# ACCEPT OR REJECT A REQUEST
@app.route("/api/requests/<int:request_id>", methods=["PATCH"])
def update_request(request_id):
    data = request.get_json(silent=True) or {}
    status = data.get("status", "").strip().title()

    if status not in ["Accepted", "Rejected"]:
        return jsonify({
            "error": "Status must be Accepted or Rejected"
        }), 400

    con = get_connection()
    cur = con.execute(
        "UPDATE partnership_requests SET status = ? WHERE id = ?",
        (status, request_id)
    )
    con.commit()
    updated = cur.rowcount
    con.close()

    if not updated:
        return jsonify({"error": "Request not found"}), 404

    return jsonify({
        "message": "Request updated",
        "id": request_id,
        "status": status
    })


# IMPACT SUMMARY
@app.route("/api/impact", methods=["GET"])
def impact():
    con = get_connection()

    projects = con.execute(
        "SELECT COUNT(*) FROM projects"
    ).fetchone()[0]

    requests_count = con.execute(
        "SELECT COUNT(*) FROM partnership_requests"
    ).fetchone()[0]

    accepted = con.execute(
        "SELECT COUNT(*) FROM partnership_requests WHERE status = 'Accepted'"
    ).fetchone()[0]

    con.close()

    return jsonify({
        "total_projects": projects,
        "total_requests": requests_count,
        "accepted_partnerships": accepted
    })


if __name__ == "__main__":
    app.run(debug=True)
