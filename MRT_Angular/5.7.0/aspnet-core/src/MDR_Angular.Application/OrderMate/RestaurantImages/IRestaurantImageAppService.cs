using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantImages
{
    public interface IRestaurantImageAppService: IAsyncCrudAppService<RestaurantImageDto>
    {
    }
}
