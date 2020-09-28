using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuRestaurants.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuRestaurants
{
    public interface  IMenuRestaurantAppService: IAsyncCrudAppService<MenuRestaurantDto>
    {
    }
}
