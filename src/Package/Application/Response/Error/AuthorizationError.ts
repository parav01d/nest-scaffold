import { ApiProperty } from '@nestjs/swagger';
import { HTTP_STATUS_CODE } from 'Package/Application/Controller/StatusCode';

export class AuthorizationError {
  @ApiProperty({
    type: () => Number,
    default: HTTP_STATUS_CODE.FORBIDDEN,
  })
  private status = HTTP_STATUS_CODE.FORBIDDEN;
  @ApiProperty()
  private error: any;
  constructor(error: object) {
    this.error = error;
  }
  getStatus() {
    return this.status;
  }
  getError() {
    return this.error;
  }
}
