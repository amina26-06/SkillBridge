
import urllib.request
import json

url = "http://127.0.0.1:5000/api/projects"

project = {
    "title": "Digital Classrooms for All",
    "description": "Help students access digital learning resources.",
    "skills_needed": "Teaching, Web Development"
}

data = json.dumps(project).encode("utf-8")

req = urllib.request.Request(
    url,
    data=data,
    headers={"Content-Type": "application/json"},
    method="POST"
)

try:
    with urllib.request.urlopen(req) as response:
        print(response.status)
        print(response.read().decode("utf-8"))
except Exception as error:
    print("Error:", error)
