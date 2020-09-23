using Abp.Application.Services;
using MDR_Angular.OrderMate.AdvertisementPrices.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.AdvertisementPrices
{
    public interface IAdvertisementPriceAppService: IAsyncCrudAppService<AdvertisementPriceDto>
    {
    }
}
