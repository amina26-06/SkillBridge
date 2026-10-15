
import sqlite3

def get_connection():
    connection = sqlite3.connect("skillbridge.db")
    connection.row_factory = sqlite3.Row
    return connection

def init_db():
    connection = get_connection()

    connection.execute("""
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            skills_needed TEXT NOT NULL
        )
    """)

    connection.execute("""
        CREATE TABLE IF NOT EXISTS partnership_requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sender_name TEXT NOT NULL,
            project_id INTEGER,
            message TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'Pending',
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    
    connection.commit()
    connection.close()

if __name__ == "__main__":
    init_db()
    print("SkillBridge database created successfully!")
