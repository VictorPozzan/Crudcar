# Crudcar

Requisitos?
#Ter o NodeJs instalado
#Ter o MySQL Server instalado, com uma entidade no banco chamada "crudcar" 
-------------------------------------------------------------------------------
#Instalar o NestJs
npm i -g @nestjs/cli

#dependências necessárias
npm install --save @nestjs/typeorm typeorm mysql

#Rodar o backend:
npm run start:dev
-------------------------------------------------------------------------------
#Frontend
#instalar o angular
npm install -g @angular/cli

#instalar o bootstrap
npm install bootstrap --save

#Uma das formas de rodar o frontend:
ng serve --port 333 -o --prod
