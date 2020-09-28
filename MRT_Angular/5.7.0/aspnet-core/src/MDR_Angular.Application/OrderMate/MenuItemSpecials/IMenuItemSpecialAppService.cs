using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItemSpecials.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemSpecials
{
    public interface IMenuItemSpecialAppService: IAsyncCrudAppService<MenuItemSpecialDto>
    {
    }
}
