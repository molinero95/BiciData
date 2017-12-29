import csv
import re
with open('accidentes.csv') as csvfile:
   spamreader = csv.reader(csvfile, delimiter=';', quoting=csv.QUOTE_MINIMAL)
   for row in spamreader:
         print(row)
