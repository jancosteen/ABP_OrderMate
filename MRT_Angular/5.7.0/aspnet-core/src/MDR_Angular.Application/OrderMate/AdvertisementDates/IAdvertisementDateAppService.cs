using Abp.Application.Services;
using MDR_Angular.OrderMate.AdvertisementDates.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.AdvertisementDates
{
    public interface IAdvertisementDateAppService: IAsyncCrudAppService<AdvertisementDateDto>
    {
    }
}
