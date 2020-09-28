using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItems.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItems
{
    public interface IMenuItemAppService: IAsyncCrudAppService<MenuItemDto>
    {
    }
}
