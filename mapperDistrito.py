import csv

sum = 0

with open('accidentes.csv') as csvfile:
   spamreader = csv.DictReader(csvfile, delimiter=';',  quoting=csv.QUOTE_ALL)
   f = open('output.txt', 'w')
   for row in spamreader:
		 
         print (row['DISTRITO'] + "\t1")
         f.write(row['DISTRITO'] + "\t1")
         sum = sum + 1
   
   print sum
   f.close()
	
  
 
