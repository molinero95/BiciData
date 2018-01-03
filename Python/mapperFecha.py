import csv
import re
sum = 0

with open('accidentes.csv') as csvfile:
   spamreader = csv.DictReader(csvfile, delimiter=';',  quoting=csv.QUOTE_ALL)
   f = open('aux.txt', 'w')
   for row in spamreader:
		 
         
         f.write(row['Fecha'] + "\t1 \n")
         sum = sum + 1
   
   print sum
  
f.close()

f = open('aux.txt', 'r')	
l = open('output.txt', 'w')
	
for line in f:
	line = re.sub(r' 0:00', '', line)
	print line
	l.write(line)
	
f.close()
l.close()
