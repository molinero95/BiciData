import csv

sum = 0

with open('accidentes.csv') as csvfile:
   spamreader = csv.DictReader(csvfile, delimiter=';',  quoting=csv.QUOTE_ALL)
   for row in spamreader:
         print (row['DISTRITO'] + "\t1")
