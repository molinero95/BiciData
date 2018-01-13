import csv
import re
import sys
suma = 0

with open('accidentes.csv') as csvfile:
	spamreader = csv.reader(csvfile)
	for row in spamreader:
		linea = row[0].split(";")
		fecha= linea[1].split(' ')
		if len(fecha) > 3:
			linea[3] = re.sub(r' +','',linea[3])
			
			
			print  linea[3] + "\t" + fecha[1]
		
		
		#print(row)
