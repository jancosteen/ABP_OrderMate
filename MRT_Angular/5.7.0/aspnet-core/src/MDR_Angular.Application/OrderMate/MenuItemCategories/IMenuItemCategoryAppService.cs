using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItemCategories.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemCategories
{
    public interface IMenuItemCategoryAppService: IAsyncCrudAppService<MenuItemCategoryDto>
    {
    }
}
