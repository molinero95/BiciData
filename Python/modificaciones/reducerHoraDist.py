import sys

previous = None
prev = None
suma = 0
print 
for line in sorted(sys.stdin):
	dist, hora = line.split( '\t' )
	if dist != prev:
		print dist + '\n'
		prev = dist
	if  hora!= previous:
		print '%s\t%s' % (suma, hora)
		
		
		previous = hora
		suma = 0
	suma = suma + 1
	
	
	
	
		
	


