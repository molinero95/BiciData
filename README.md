# BiciData
Por problemas de SSL primero acceder a:
https://ec2-52-47-87-168.eu-west-3.compute.amazonaws.com/accidentesDistrito
Añadir excepción y una vez añadida acceder a:
https://molinero95.github.io/BiciData/

#¿De dónde hemos sacado los datos?
Los datos pertenecen al Ayuntamiento de Madrid, al catálogo de datos de datos.madrid.es
http://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=20f4a87ebb65b510VgnVCM1000001d4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default

#¿Cómo hemos procesado los datos?
Los datos han sido procesados a través de MapReduce con python sobre un cluster Hadoop en Amazon AWS.
El contenido de las funciones Map y reduce se encuentran en el directorio Python/ y Python/modificaciones

