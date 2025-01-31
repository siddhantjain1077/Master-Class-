import mysql.connector
from mysql.connector import Error
import cgi
import hashlib

# Create instance of FieldStorage
form = cgi.FieldStorage()

def connect_to_database():
    try:
        connection = mysql.connector.connect(
            host='localhost',  # Replace with your database host
            user='root',  # Replace with your MySQL username
            password='',  # Replace with your MySQL password
            database='users_db'  # Replace with your database name
        )
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error: {e}")
        return None

def signup_user(connection, name, phone_number, email, password):
    try:
        cursor = connection.cursor()
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        cursor.execute(
            "INSERT INTO users (name, phone_number, email, password) VALUES (%s, %s, %s, %s)",
            (name, phone_number, email, hashed_password)
        )
        connection.commit()
        cursor.close()
    except Error as e:
        print(f"Error: {e}")

def login_user(connection, email, password):
    try:
        cursor = connection.cursor()
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (email, hashed_password))
        user = cursor.fetchone()
        cursor.close()
        return user
    except Error as e:
        print(f"Error: {e}")
        return None

def main():
    connection = connect_to_database()
    if connection:
        if form.getvalue('signup'):
            name = form.getvalue('name')
            phone_number = form.getvalue('phone_number')
            email = form.getvalue('email')
            password = form.getvalue('password')
            signup_user(connection, name, phone_number, email, password)
            print("Content-type: text/html\n")
            print("<h2>Sign Up successful!</h2>")
        elif form.getvalue('login'):
            email = form.getvalue('email')
            password = form.getvalue('password')
            user = login_user(connection, email, password)
            print("Content-type: text/html\n")
            if user:
                print("<h2>Login successful!</h2>")
            else:
                print("<h2>Invalid email or password</h2>")
        connection.close()

if __name__ == "__main__":
    main()
