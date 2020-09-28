using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItemPrices.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemPrices
{
    public interface IMenuItemPriceAppService: IAsyncCrudAppService<MenuItemPriceDto>
    {
    }
}
