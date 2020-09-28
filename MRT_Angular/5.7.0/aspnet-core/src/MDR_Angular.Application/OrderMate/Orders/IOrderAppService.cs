using Abp.Application.Services;
using MDR_Angular.OrderMate.Orders.Dto;

namespace MDR_Angular.OrderMate.Orders
{
    public interface IOrderAppService : IAsyncCrudAppService<OrderDto>
    {
    }
}
