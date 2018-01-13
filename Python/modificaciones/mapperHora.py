import csv
import re


with open('accidentes.csv') as csvfile:
   spamreader = csv.DictReader(csvfile, delimiter=';',  quoting=csv.QUOTE_ALL)
   
   for row in spamreader:
	   hora = row['TRAMO HORARIO'].split(' ')
	   
	   print (hora[1] + "\t1")

  
