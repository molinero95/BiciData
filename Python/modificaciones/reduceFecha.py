import sys

previous = None
sum = 0

for line in sys.stdin:
	
    key, value = line.split( '\t' )
    dia, mes, ano = key.split('/')
    
    if mes != previous:
        if previous is not None:
			
            print str( sum ) + '\t' + previous
            
       
        previous = mes
        sum = 0
		
    sum = sum + int( value )

print str( sum ) + '\t' + previous + '\n'

   




