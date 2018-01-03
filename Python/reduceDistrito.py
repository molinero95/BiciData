import sys

previous = None
sum = 0
tot = 0
ava = 0
f = open('total.txt', 'w')
for line in sys.stdin:
	
    key, value = line.split( '\t' )
    tot = tot + 1
    if key != previous:
        if previous is not None:
            print 'Accidentes:\t' + str( sum ) + '\t' + previous
            f.write(str( sum ) + '\t' + previous + "\n")
       
        previous = key
        sum = 0
		
    sum = sum + int( value )

print 'Accidentes:\t' + str( sum ) + '\t' + previous + '\n'
f.write(str( sum ) + '\t' + previous + "\n")
f.close()
l = open('total.txt', 'r')
fd = open('output.txt', 'w')
for line in l:
	a, b = line.split( '\t' )
	ava = float ( a ) / tot
	a = ava * 100
	print  'Average:\t' + str ( a ) + '\t%' + '\t' + b
	fd.write(str( a ) + '\t' + b + "\n")
	
	
	
l.close()
fd.close()    





    




