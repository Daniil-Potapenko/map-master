import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User{
  @Prop({ required: true })
  firstName: string;
  
  @Prop()
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({default:["user"]})
  role: [string]
}

export const UserSchema = SchemaFactory.createForClass(User)

