using Abp.Application.Services;
using MDR_Angular.OrderMate.OrderLines.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.OrderLines
{
    public interface IOrderLineAppService: IAsyncCrudAppService<OrderLineDto>
    {
    }
}
