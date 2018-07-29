import time
import requests
import json
from io import StringIO

def main():
    datastring = ""
    while True:
        file = open('data.txt', 'r')
        temp = str(file.read().replace('\n',''))
        if datastring != temp and temp != '':
            datastring = temp
            io = StringIO(datastring)
            r = requests.get('http://localhost:8000/addData?' + temp)
            print(r.url)
        file.close()         
        time.sleep(1)

if __name__ == "__main__":
    main()
