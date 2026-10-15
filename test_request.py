
import urllib.request
import json

url = "http://127.0.0.1:5000/api/requests"

partnership = {
    "sender_name": "Student Volunteer",
    "project_id": 1,
    "message": "I would like to collaborate on Digital Classrooms for All."
}

data = json.dumps(partnership).encode("utf-8")

req = urllib.request.Request(
    url,
    data=data,
    headers={"Content-Type": "application/json"},
    method="POST"
)

try:
    with urllib.request.urlopen(req) as response:
        print("Status:", response.status)
        print(response.read().decode("utf-8"))
except Exception as error:
    print("Error:", error)
