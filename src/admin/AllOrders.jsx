import React, { useState } from "react";
import { Search, Filter, Eye, MoreVertical, CheckCircle, Clock, XCircle } from "lucide-react";
import Heading from "../components/Heading";

const mockOrders = [
  { id: "ORD-001", user: "John Doe", product: "Sony A7 III", rent: 2500, deposit: 4000, date: "12 Apr 2026", status: "Active", image: "https://i.pinimg.com/736x/08/31/b3/0831b386694b12501172198ab959e770.jpg" },
  { id: "ORD-002", user: "Alice Smith", product: "MacBook Pro M3 Max", rent: 8500, deposit: 15000, date: "15 Apr 2026", status: "Pending", image: "https://i.pinimg.com/736x/c5/d9/15/c5d9158229babb28fb56a8fa017a5bc8.jpg" },
  { id: "ORD-003", user: "Bob Johnson", product: "DJI Mavic 3", rent: 3000, deposit: 5000, date: "01 Mar 2026", status: "Completed", image: "https://i.pinimg.com/736x/d8/d5/36/d8d536c478e515d9afb22c7102eef5a3.jpg" },
  { id: "ORD-004", user: "Emma Davis", product: "PS5 Console", rent: 1500, deposit: 2000, date: "20 Apr 2026", status: "Cancelled", image: "https://i.pinimg.com/736x/51/82/8c/51828cb0fbad1c6dd8cfac1341be5e5a.jpg" },
  { id: "ORD-005", user: "Chris Evans", product: "Yamaha Guitar", rent: 1000, deposit: 1500, date: "28 Apr 2026", status: "Active", image: "https://i.pinimg.com/736x/9e/1f/26/9e1f26a6c2fc57c9a9b69bdecfef6ac1.jpg" },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "Active":
      return <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-xs font-semibold tracking-wide"><CheckCircle size={13} /> Active</span>;
    case "Pending":
      return <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-xs font-semibold tracking-wide"><Clock size={13} /> Pending</span>;
    case "Completed":
      return <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs font-semibold tracking-wide"><CheckCircle size={13} /> Completed</span>;
    case "Cancelled":
      return <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full text-xs font-semibold tracking-wide"><XCircle size={13} /> Cancelled</span>;
    default:
      return null;
  }
};

const AllOrders = () => {
  const [search, setSearch] = useState("");

  const filteredOrders = mockOrders.filter((order) => {
      const term = search.toLowerCase();
      return (
         order.id.toLowerCase().includes(term) ||
         order.user.toLowerCase().includes(term) ||
         order.product.toLowerCase().includes(term)
      )
  });

  return (
    <div className="p-6 md:p-8 md:px-15 max-w-[1600px] mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
           <Heading
             small="Administration"
             heading={
               <h1 className="text-3xl md:text-4xl font-heading text-[var(--text-main)] leading-tight">
                 All <span className="text-[var(--accent-secondary)]">Orders</span>
               </h1>
             }
           />
           <p className="text-[var(--text-secondary)] text-sm mt-1 max-w-md">Manage and track all customer rentals, payments, and order statuses.</p>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-3 w-full lg:w-auto mt-4 lg:mt-0">
          <div className="flex items-center gap-3 w-full lg:w-80 px-4 py-3 rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)]/80 backdrop-blur-md text-[var(--text-main)] shadow-sm focus-within:border-[var(--accent-secondary)] focus-within:ring-2 focus-within:ring-[var(--accent-secondary)]/20 transition-all">
            <Search size={18} className="text-[var(--text-secondary)] shrink-0" />
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--text-secondary)]/70 w-full"
            />
          </div>
          <button className="p-3 rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:shadow-md transition-all shrink-0">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl overflow-hidden shadow-xl shadow-[var(--bg-primary)]/10">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[var(--bg-tertiary)]/70 border-b border-[var(--border-light)]/80 text-[var(--text-secondary)] text-xs uppercase tracking-wider font-semibold">
                <th className="p-4 py-5 pl-6 w-32">Order ID</th>
                <th className="p-4 py-5 w-72">Product</th>
                <th className="p-4 py-5 w-48">Customer</th>
                <th className="p-4 py-5 w-32">Date</th>
                <th className="p-4 py-5 w-40">Amount</th>
                <th className="p-4 py-5 w-36">Status</th>
                <th className="p-4 py-5 text-right pr-6 w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-light)]/50">
              {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[var(--bg-tertiary)]/40 transition-colors group">
                  <td className="p-4 pl-6 align-middle">
                    <span className="inline-block text-[var(--text-main)] font-bold text-sm bg-[var(--bg-tertiary)] px-2.5 py-1 rounded border border-[var(--border-light)] shadow-sm">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--border-light)] shrink-0 shadow-sm group-hover:shadow group-hover:border-[var(--accent-secondary)]/30 transition-all">
                         <img src={order.image} alt={order.product} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-[var(--text-main)] font-semibold text-sm line-clamp-2 leading-tight pr-4">
                        {order.product}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                     <div className="flex flex-col">
                       <span className="text-[var(--text-main)] font-medium text-sm">{order.user}</span>
                       <span className="text-[var(--text-secondary)] text-xs mt-0.5">user@example.com</span>
                     </div>
                  </td>
                  <td className="p-4 align-middle">
                     <span className="text-[var(--text-secondary)] font-medium text-sm">{order.date}</span>
                  </td>
                  <td className="p-4 align-middle">
                     <div className="flex flex-col">
                        <span className="text-[var(--text-main)] font-bold text-sm whitespace-nowrap">
                          ₹{order.rent} <span className="text-[var(--text-muted)] font-medium text-xs">/mo</span>
                        </span>
                        <span className="text-[var(--text-secondary)] text-[11px] font-medium mt-1 uppercase tracking-wide">
                          Dep: <span className="text-[var(--text-main)]">₹{order.deposit}</span>
                        </span>
                     </div>
                  </td>
                  <td className="p-4 align-middle flex flex-col justify-center h-[88px]">
                     {getStatusBadge(order.status)}
                  </td>
                  <td className="p-4 pr-6 text-right align-middle">
                    <div className="flex justify-end gap-1 items-center opacity-40 group-hover:opacity-100 transition-opacity">
                       <button className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 rounded-lg transition-colors tooltip-trigger" title="View Details">
                         <Eye size={18} />
                       </button>
                       <button className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-light)] rounded-lg transition-all" title="More Options">
                         <MoreVertical size={18} />
                       </button>
                    </div>
                  </td>
                </tr>
              )) : (
                 <tr>
                    <td colSpan="7" className="p-10 text-center text-[var(--text-secondary)]">
                       No orders found matching "{search}"
                    </td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 px-6 border-t border-[var(--border-light)]/80 bg-[var(--bg-tertiary)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)] font-medium">
           <span>Showing <span className="text-[var(--text-main)]">{filteredOrders.length > 0 ? 1 : 0}</span> to <span className="text-[var(--text-main)]">{filteredOrders.length}</span> of <span className="text-[var(--text-main)]">{mockOrders.length}</span> entries</span>
           <div className="flex gap-1.5">
              <button className="px-3 py-1.5 border border-[var(--border-light)] rounded-md hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)] disabled:opacity-50 transition-colors shadow-sm">Prev</button>
              <button className="px-3 py-1.5 border border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white rounded-md shadow-md shadow-[var(--accent-primary)]/20 font-semibold">1</button>
              <button className="px-3 py-1.5 border border-[var(--border-light)] rounded-md hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)] disabled:opacity-50 transition-colors shadow-sm">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;