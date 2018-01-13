import sys

previous = None
sum = 0
for line in sys.stdin:	
	key, value = line.split( '\t' )
	if key != previous and len(key) > 4:
        	if previous is not None:
       			print str( sum ) + '\t' + previous
        	previous = key
        	sum = 0
    	sum = sum + int( value )
print str(sum) + '\t' + key




