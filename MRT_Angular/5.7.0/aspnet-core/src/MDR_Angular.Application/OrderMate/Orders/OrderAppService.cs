using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.Orders.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Orders
{
    [AbpAuthorize(PermissionNames.Pages_O)]
    public class OrderAppService : AsyncCrudAppService<
        Order, OrderDto, int, PagedAndSortedResultRequestDto, OrderDto>, IOrderAppService
    {
        public OrderAppService(IRepository<Order> repository) : base(repository) { }
    }
}
