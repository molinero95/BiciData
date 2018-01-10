import csv


with open('accidentes.csv') as csvfile:
   spamreader = csv.DictReader(csvfile, delimiter=';',  quoting=csv.QUOTE_ALL)
   
   for row in spamreader:
	   fecha = row['Fecha'].split(' ')
	   print (fecha[0] + "\t1")
   