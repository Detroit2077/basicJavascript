# write a program that put all the folder to the localhost server like the command python -m http.server 8000

import os
import http.server
import socketserver

PORT = 8000

# This is the main function
def main():
    # Create a new server
    handler = http.server.SimpleHTTPRequestHandler
    # Change the directory to the current directory
    os.chdir("D:/detroit OP")
    # Create a new socket server
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        # Print the
        print("serving at port", PORT)
        # Start the server
        httpd.serve_forever()

# This is the main function
if __name__ == "__main__":
    # Call the main function
    main()

# End of file
# how to close the server
# ctrl + c