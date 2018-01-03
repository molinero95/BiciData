import sys

previous = None
sum = 0
tot = 0
ava = 0
f = open('totalMes.txt', 'w')
diccionario = { '01' : 'enero','02' : 'febrero','03' : 'marzo','04' : 'abril','05' : 'mayo','06' : 'junio','07' : 'julio','08' : 'agosto','09' : 'septiembre','10' : 'octrubre','11' : 'noviembre','12' : 'diciembre' }

for line in sys.stdin:
	
    dia, mes, ano = line.split( '/' )
    an, value = ano.split('\t')
    tot = tot + 1
    if mes != previous:
        if previous is not None:
			
            
            a = diccionario[previous]
            f.write(str( sum ) + '\t' + a + "\n")
            print 'Accidentes:\t' + str( sum ) + '\t' + a
       
        previous = mes
        sum = 0
	a = diccionario[previous]	
    sum = sum + int( value )

print 'Accidentes:\t' + str( sum ) + '\t' + a + '\n'
f.write(str( sum ) + '\t' + a + "\n")  
f.close()
l = open('totalMes.txt', 'r')
fd = open('outputMes.txt', 'w')
for line in l:
	a, b = line.split( '\t' )
	ava = float ( a ) / tot
	a = ava * 100
	print  'Average:\t' + str ( a ) + '\t%' + '\t' + b
	fd.write(str( a ) + '\t' + b + "\n")
	
	
	
l.close()
fd.close() 
  




