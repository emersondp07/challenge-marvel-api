import { Injectable } from "@nestjs/common";
import { HttpsServices } from "../http/http.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CrudMarvelService {
  constructor(private readonly prismaService: PrismaService,
    private readonly httpsServices: HttpsServices) { }

  async upgradeListDb(): Promise<any> {
    const getAllHeroes = await this.httpsServices.findAllHero()

    const listHeroes: string[] = []

    getAllHeroes.map(async (hero) =>
      !await this.prismaService.heroes.findUnique({
        where: {
          id: hero?.id
        }
      }) ?
        await this.prismaService.heroes.create({
          data: {
            id: hero?.id,
            name: hero?.name,
            favorite: false
          }
        })
        :
        null
    )
  }

  async findAllHeroes(): Promise<any> {
    const listInTheDb = await this.prismaService.heroes.findMany()

    console.log(listInTheDb.length);

    return listInTheDb
  }

  async findOne(name: string): Promise<any> {
    return await this.prismaService.heroes.findMany({
      where: {
        name: {
          contains: name
        }
      }
    })
  }

  async addFavorite(id: number): Promise<any> {

    const hero = await this.prismaService.heroes.findUnique({
      where: {
        id: +id
      },
      select: {
        id: true,
        name: true,
        favorite: true
      }
    })

    if (hero?.favorite === true) {
      return await this.prismaService.heroes.update({
        data: {
          favorite: false
        },
        where: {
          id: +id
        }
      })
    } else {
      return await this.prismaService.heroes.update({
        data: {
          favorite: true
        },
        where: {
          id: +id
        }
      })
    }

  }

  async favoriteList(): Promise<any> {
    return await this.prismaService.heroes.findMany({
      where: {
        favorite: true
      }
    })
  }
}
