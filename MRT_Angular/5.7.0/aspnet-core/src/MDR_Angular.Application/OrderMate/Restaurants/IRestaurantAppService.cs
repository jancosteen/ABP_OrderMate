using Abp.Application.Services;

namespace MDR_Angular.OrderMate.Restaurants
{
    public interface IRestaurantAppService : IAsyncCrudAppService<RestaurantDto>
    {
    }
}
