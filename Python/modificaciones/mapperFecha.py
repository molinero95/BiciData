import csv


with open('accidentes.csv') as csvfile:
	spamreader = csv.reader(csvfile)
	for row in spamreader:
		linea = row[0].split(";")
		fecha= linea[0].split(' ')
		if len(fecha) == 2:
			print (fecha[0] + "\t1")