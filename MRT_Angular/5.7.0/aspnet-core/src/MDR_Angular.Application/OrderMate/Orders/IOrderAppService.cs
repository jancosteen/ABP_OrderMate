using Abp.Application.Services;
using MDR_Angular.OrderMate.Orders.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Orders
{
    public interface IOrderAppService: IAsyncCrudAppService<OrderDto>
    {
    }
}
