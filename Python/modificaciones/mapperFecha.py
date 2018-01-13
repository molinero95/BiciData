import csv


with open('accidentes.csv') as csvfile:
	spamreader = csv.reader(csvfile, delimiter=';',  quoting=csv.QUOTE_ALL)

	for row in spamreader:
		fecha = row[0].split(' ')
		if("/" in fecha[0]):
			fecha = fecha[0].split("/")
			mes = fecha[1]
			print (mes + "\t1")
