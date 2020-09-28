using Abp.Application.Services;
using MDR_Angular.OrderMate.LayoutTypes.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.LayoutTypes
{
    public interface ILayoutTypeAppService: IAsyncCrudAppService<LayoutTypeDto>
    {
    }
}
