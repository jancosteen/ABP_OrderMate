using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Menus
{
    public interface IMenuAppService: IAsyncCrudAppService<MenuDto>
    {
    }
}
