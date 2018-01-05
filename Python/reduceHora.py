import sys

previous = None
sum = 0
tot = 0
ava = 0
f = open('totalHora.txt', 'w')

for line in sys.stdin:
	
    ini, fin, value = line.split( '\t' )
    
    tot = tot + 1
    if ini != previous:
        if previous is not None:        
            f.write(str( sum ) + '\t' + previous + "\n")
            print 'Accidentes:\t' + str( sum ) + '\t' + previous
       
        previous = ini
        sum = 0
		
    sum = sum + int( value )

print 'Accidentes:\t' + str( sum ) + '\t' + previous
f.write(str( sum ) + '\t' + previous + "\n")  
f.close()
l = open('totalHora.txt', 'r')
fd = open('outputhora.txt', 'w')
for line in l:
	a, b = line.split( '\t' )
	ava = float ( a ) / tot
	a = ava * 100
	print  'Average:\t' + str ( a ) + '\t%' + '\t' + b 
	fd.write(str( a ) + '\t' + b + "\n")
	
	
	
l.close()
fd.close() 
  




