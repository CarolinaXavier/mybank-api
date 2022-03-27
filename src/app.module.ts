import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';

let db = 'mybank';
let pass = 'mybank';
let user = 'mybank';
let stringConnectionDB = 'mongodb+srv://' + user + ':' + pass + '@cluster0.ppdna.mongodb.net/' + db + '?retryWrites=true&w=majority';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(stringConnectionDB)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }