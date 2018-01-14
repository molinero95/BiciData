import sys

previous = None
prev = None
suma = 0
print 
for line in sorted(sys.stdin):
	dist, hora = line.split( '\t' )
	
	if  hora!= previous:
		if previous is not None:
			print '%s\t%s\t%s' % (dist,suma, previous)
		previous = hora
		suma = 0
			
		
	suma = suma + 1
	

	
	
		
	


	
		
	


