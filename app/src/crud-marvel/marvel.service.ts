import { Injectable } from "@nestjs/common";
import { HttpsServices } from "../http/http.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class MarvelService {
  constructor(private readonly prismaService: PrismaService,
    private readonly httpsServices: HttpsServices) { }

  async upgradeListDb(): Promise<void> {
    const getAllHeroes = await this.httpsServices.findAllHero()

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

  async findAllHeroes(): Promise<object[]> {
    return await this.prismaService.heroes.findMany()
  }

  async findOne(name: string): Promise<object> {
    return await this.prismaService.heroes.findMany({
      where: {
        name: {
          contains: name
        }
      }
    })
  }

  async addFavorite(id: number): Promise<object> {

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

  async favoriteList(): Promise<object[]> {
    return await this.prismaService.heroes.findMany({
      where: {
        favorite: true
      }
    })
  }
}
