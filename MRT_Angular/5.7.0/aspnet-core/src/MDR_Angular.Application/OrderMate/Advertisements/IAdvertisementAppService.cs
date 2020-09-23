using Abp.Application.Services;
using MDR_Angular.OrderMate.Advertisements.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Advertisements
{
    public interface IAdvertisementAppService: IAsyncCrudAppService<AdvertisementDto>
    {
    }
}
