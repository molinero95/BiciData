import csv

sum = 0

with open('accidentes.csv') as csvfile:
	spamreader = csv.reader(csvfile)
	for row in spamreader:
		row = row[0].split(";")
		print (row[3] + "\t1")
		#print(row)
