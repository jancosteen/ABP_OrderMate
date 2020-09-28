using Abp.Application.Services;
using MDR_Angular.OrderMate.OrderStatusses.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.OrderStatusses
{
    public interface IOrderStatusAppService: IAsyncCrudAppService<OrderStatusDto>
    {
    }
}
