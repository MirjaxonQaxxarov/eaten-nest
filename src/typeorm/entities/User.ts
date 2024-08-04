import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;

    // @Column({default:'Noma\'lum'})
    // firstname:string;
    
    // @Column({default:'Noma\'lum'})
    // lastname:string;
    
    @Column({unique:true})
    login:string;

    // @Column()
    // email:string;
    
    @Column()
    password:string;

    // @Column({
    //     nullable:true,
    //     type:"text"

    // })
    // img:string;

    
    // @Column({
    //     nullable:true,
    //     type:"text"

    // })
    // gallery:string;


    
    
    // @Column({
    //     nullable:true
    // })
    // address:string;
    
    // @Column({
    //     nullable:true

    // })
    // phone:string;
    
    // @Column({
    //     nullable:true,
    //     type:"text"

    // })
    // desc:string;
    
    // @Column({
    //     nullable:true
    // })
    // tumanId:number;

    
    // @Column({
    //     nullable:true
    // })
    // regionId:number;


    // @Column({default:null,
    //     nullable:true
    // })
    // passport:string;
    
    // @Column({default:null,
    //     nullable:true
    // })
    // jshshir:string;

    @Column({})
    createdAt:Date;

    @Column({default:"0",
        nullable:true
    })
    role:string;
    
    
    


}