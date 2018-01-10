import sys

previous = None
sum = 0
ava = 0


for line in sys.stdin:
	
    ini, value = line.split( '\t' )
    
    
    if ini != previous:
        if previous is not None:        
           
            print str( sum ) + '\t' + previous
       
        previous = ini
        sum = 0
		
    sum = sum + int( value )

print str( sum ) + '\t' + previous
