import { Controller, Get, ParseEnumPipe, Query } from '@nestjs/common';

enum MyEnum {
  Foo = 'foo',
  Bar = 'bar',
}

@Controller()
export class AppController {
  @Get()
  example(
    @Query('test', new ParseEnumPipe(MyEnum, { optional: true })) test: MyEnum,
  ) {
    console.log(test);

    return true;
  }
}
