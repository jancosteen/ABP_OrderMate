using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItemTypes.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemTypes
{
    public interface IMenuItemTypeAppService: IAsyncCrudAppService<MenuItemTypeDto>
    {
    }
}
